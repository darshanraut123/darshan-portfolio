import urlshortener from '../../assets/projects_images/urlshortener.png'
import reset from '../../assets/projects_images/reset.png';
import webscrapping from '../../assets/projects_images/webscrapping.png';
import foodstore from '../../assets/projects_images/foodstore.png';
import portfolio from '../../assets/projects_images/portfolio.png';


const data_projects = [
    {
        name: 'URL Shortener',
        image: urlshortener,
        deployed_url: 'https://url-shortner-app-frontend.herokuapp.com/',
        github_url: 'https://github.com/darshanraut123/urlshortner-frontend',
    },
    {
        name: 'WebScrapping',
        image: webscrapping,
        deployed_url: 'https://webscrappingecommercefrontend.herokuapp.com/',
        github_url: '//https://github.com/darshanraut123/webScrapping-Ecommerce',
    },
    {
        name: 'Password Reset Email verification',
        image: reset,
        deployed_url: 'https://password-reset-flow-frontend.netlify.app/',
        github_url: 'https://github.com/darshanraut123/password-reset-flow-backend',
    },
    {
        name: 'Current Portfolio',
        image: portfolio,
        deployed_url: 'https://darshans-portfolio.netlify.app/',
        github_url: 'https://github.com/darshanraut123/darshan-portfolio',
    },
    {
        name: 'Food Store CRUD Front END',
        image: foodstore,
        deployed_url: 'https://food-choice-app.netlify.app/',
        github_url: 'https://github.com/darshanraut123/CRUD-Formik-Food-Choice-App-27-28',
    },
]


export default data_projects;