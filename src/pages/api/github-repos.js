export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const username = 'israelcena';

    // Usar GraphQL para buscar repositórios pinados
    const query = `
      query {
        user(login: "${username}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                homepageUrl
                stargazerCount
                forkCount
                primaryLanguage {
                  name
                }
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                updatedAt
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN || ''}`,
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    const pinnedRepos = result.data?.user?.pinnedItems?.nodes || [];

    const formattedRepos = pinnedRepos.map((repo) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || 'Sem descrição disponível',
      tags: repo.repositoryTopics?.nodes?.map(t => t.topic.name) || [],
      language: repo.primaryLanguage?.name,
      source: repo.url,
      visit: repo.homepageUrl || repo.url,
      stars: repo.stargazerCount,
      forks: repo.forkCount,
      updated_at: repo.updatedAt
    }));

    // Cache de 1 hora
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    return res.status(200).json(formattedRepos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return res.status(500).json({
      message: 'Error fetching repositories',
      error: error.message
    });
  }
}
