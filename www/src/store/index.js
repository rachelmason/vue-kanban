import axios from 'axios'
let api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 2000,
    withCredentials: true
})

api.post('http://localhost:3000/login', {
    email: 'user@email.com',
    password: 'password'
})

//REGISTER ALL DATA HERE
let state = {
    boards: [],
    lists:[],
    activeList:{},
    activeBoard: {},
    error: {}
}

let handleError = (err) => {
    state.error = err
}


export default {
    //ALL DATA LIVES IN THE STATE
    state,
    //ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
    actions: {
        getBoards() {
            api.get('boards').then(res => {
                state.boards = res.data.data
            }).catch(handleError)
        },

        getBoard(id) {
            api('boards/' + id)
                .then(res => {
                    state.activeBoard = res.data.data
                }).catch(handleError)
        },

        addBoard(board) {
            api.post('boards/', board)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },

        removeBoard(board) {
            api.delete('boards/'+board._id)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },
         getLists(boardId) {
            api.get('board/'+board._id+'/lists').then(res => {
                state.lists = res.data.data
            }).catch(handleError)
        },
          getList(listId) {
            api('lists/' + id)
                .then(res => {
                    state.activeList = res.data.data
                }).catch(handleError)
        }, addList(list) {
            api.post('lists/', list)
                .then(res => {
                    this.getLists()
                })
                .catch(handleError)
        },

        removeList(list) {
            api.delete('lists/'+list._id)
                .then(res => {
                    this.getLists()
                })
                .catch(handleError)
        },

    }
}




