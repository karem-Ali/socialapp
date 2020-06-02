import {SET_AUTHENTICATED,SET_UNAUTHENTICATED,SET_USER,LIKE_SCREAM,UNLIKE_SCREAM} from '../type'
const initState={
    authenticated:false,
    like:[],
    notifications:[],
    credentials:{}
}
export default function(state=initState,action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated:true
            }
            case SET_UNAUTHENTICATED:
                return initState
            case SET_USER:
                return{
                    authenticated:true,
                    ...action.payload
                }
                case LIKE_SCREAM:

                    return{
                        ...state,
                        like:[
                            ...state.like,
                            {
                                userhandle: state.credentials.handle,
                                screamid: action.payload.screamid
                            }
                        ]
                    }
                    case UNLIKE_SCREAM:
                        return{
                            ...state,
                            like: state.like.filter((like)=> like.screamid !== action.payload.screamid )
                        }
            default : return state;
                
               
            
    }
}