export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62596e3c10be234bb79bd9df',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-biv34jg9',
                  apiId: '16da93fb-066d-4735-9f80-f767d0c943da'
                },
                {
                  buildHookId: '62596e3d84de7d4ee953148d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6yxws4j8',
                  apiId: '99f2b2fb-9d65-4e62-a85b-78242bed3eb5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Aminulroqib/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6yxws4j8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
