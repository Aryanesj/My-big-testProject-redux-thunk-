const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
      messages: [
        {id: 1, message: 'Czesc!'},
        {id: 2, message: 'Jak sie mash'},
        {id: 3, message: 'Co ty na to'},
        {id: 4, message: 'Dobra robota!'},
        {id: 5, message: 'Milego dnia.'},
        ],
        dialogs: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Dawid'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Grzegosh'},
        {id: 5, name: 'Vilalij'},
        {id: 6, name: 'Artur'},
        ]
  };

const dialogsReducer = (state = initialState, action) => {


	switch(action.type) {

		case 'SEND-MESSAGE':
    let body = action.newMessageBody;
    return {
    ...state,
    messages: [...state.messages, {id: 6, message: body}],
       };
		    default: 
		    return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({type: 'SEND-MESSAGE', newMessageBody});

export default dialogsReducer;