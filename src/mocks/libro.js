import { TYPES_SUPPORT_BOOKS } from "../config"


const libros = [
    {
        title:'Libro 1',
        author:'',
        supportType: {
            [TYPES_SUPPORT_BOOKS.SUPPORT_PDF_TYPE] : false,
            [TYPES_SUPPORT_BOOKS.SUPPORT_VIDEO_TYPE] : false,
            [TYPES_SUPPORT_BOOKS.SUPPORT_WEB_TYPE] : false,
        },
        links: {
            pdf:{

            },
            video:{

            },
            web : {

            }
        },
        description: '',
        careers:[],
        subject:[],
        thematic:[]
    }
]