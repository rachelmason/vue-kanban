import axios from 'axios'
let api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 200000,
    withCredentials: true
})

api.post('http://localhost:3000/login', {
    email: 'user@email.com',
    password: 'password'
})

//REGISTER ALL DATA HERE
let state = {
    boards: [],
    lists: [],
    cards: [],
    // activeLists:[{}],
    activeBoard: {},
    error: {},
    user: {}
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
            console.log('getting board')
            api.get('boards/' + id)
                .then(res => {
                    state.activeBoard = res.data.data
                    this.getBoardLists(id)
                })
                .catch(handleError)
        },

        getBoardLists(id) {
            api.get('board/' + id + '/lists')
                .then(res => {
                    state.lists = res.data.data

                    // console.log(state.lists)
                })
                .catch(handleError)
        },
        getListCards(listId, index) {
            api.get('list/' + listId + '/cards')
                .then(res => {
                    state.lists[index].cards = res.data.data
                    console.log(state.lists.cards)
                })
                .catch(handleError)
            
        },

        addBoard(board) {
            api.post('boards/', board)
                .then(res => {

                    this.getBoards()
                })
                .catch(handleError)
        },

        removeBoard(board) {
            api.delete('boards/' + board._id)
                .then(res => {
                    this.getBoards()
                })
                .catch(handleError)
        },
        // getList(listId) {
        //     api('lists/' + id)
        //         .then(res => {
        //             state.activeList = res.data.data
        //         }).catch(handleError)
        // },
        addList(newList, id) {
            api.post('lists/', newList)
                .then(res => {
                    this.getBoard(id)
                })
                .catch(handleError)
        },

        addCard(newCard, id){
            api.post('cards/', newCard)
            .then(res =>{

            })
        }

        // removeList(list) {
        //     api.delete('lists/'+list._id)
        //         .then(res => {
        //             this.getLists()
        //         })
        //         .catch(handleError)
        // },

    }
}




