
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/registerPage.vue') },
      { path: '/login', component: () => import('pages/loginPage.vue') },
      { path: '/dashboard', component: () => import('pages/dashBoard.vue') },
      { path: '/hardware', component: () => import('pages/hardWare.vue') },
      { path: '/workorder', component: () => import('pages/workOrder.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
