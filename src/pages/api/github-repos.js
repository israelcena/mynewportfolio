import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN // Optional: para aumentar o rate limit
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const username = 'israelcena';

    // Buscar todos os repositórios do usuário
    const { data: repos } = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 100,
      type: 'owner'
    });

    // Filtrar repositórios com estrelas ou que não sejam forks
    // e ordenar por estrelas e data de atualização
    const featuredRepos = repos
      .filter(repo => !repo.fork && !repo.private)
      .sort((a, b) => {
        // Priorizar repos com mais estrelas
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        // Se empatar em estrelas, usar data de atualização
        return new Date(b.updated_at) - new Date(a.updated_at);
      })
      .slice(0, 6) // Pegar os 6 principais
      .map(repo => ({
        id: repo.id,
        title: repo.name,
        description: repo.description || 'Sem descrição disponível',
        tags: repo.topics || [],
        language: repo.language,
        source: repo.html_url,
        visit: repo.homepage || repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated_at: repo.updated_at
      }));

    // Cache de 1 hora
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    return res.status(200).json(featuredRepos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return res.status(500).json({
      message: 'Error fetching repositories',
      error: error.message
    });
  }
}
