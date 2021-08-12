    import moment from 'moment'

export default [
    {
        id: '111',
        title:"My Blog",
        body:"it is a great Blog",
        createdAt: 0
    },
    {
        id: '222',
        title:"My Blog",
        body:"it is a great Blog",
        createdAt: moment(0).subtract(4,'days').valueOf()
    },
    {
        id: '333',
        title:"My Blog",
        body:"it is a great Blog",
        createdAt: moment(0).add(4,'days').valueOf()
    }
]