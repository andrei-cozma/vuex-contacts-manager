import Login from './components/auth/Login';
import ContactContainer from './components/contacts/Container';
import ContactIndex from './components/contacts/Index';
import CustomersCreate from './components/contacts/Create';
import ContactShow from './components/contacts/Show';

export const routes = [
    {
        path: '/',
        redirect: '/contacts'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/contacts',
        component: ContactContainer,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: ContactIndex
            },
            {
                path: 'create',
                component: CustomersCreate
            },
            {
                path: ':id',
                component: ContactShow
            }
        ]
    }
];