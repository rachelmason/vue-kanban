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
        }

    }
}




