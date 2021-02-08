export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602164e10aa75d41dc94c744',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-1-studio-i6cyfsvp',
                  apiId: 'ab9e35d2-d453-4c84-8d65-2b7307267478'
                },
                {
                  buildHookId: '602164e2095b32c04a9e373c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-1-web-i5rixbc8',
                  apiId: 'ce0a87d1-7b63-4689-811c-b89d98ef4265'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bildsteinglatz/sanity-gatsby-portfolio-1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-1-web-i5rixbc8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
