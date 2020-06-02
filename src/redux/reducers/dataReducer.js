import {SET_SCREAMS,LOADING_DATA,LIKE_SCREAM,UNLIKE_SCREAM,DELETE_SCREAM,POST_SCREAM,SET_SCREAM,COMMENT_ON_SCREAM} from '../type' 
const initState={
    screams:{},
    scream:{},
    countlike:0,
    countcomment:0,
    comment:{},
    loading:false
}

export default function(state=initState,action){
    switch(action.type){
        case SET_SCREAMS:
            return {
                ...state,
                screams:action.payload,
                loading:false
            }
            case LOADING_DATA:
                return {
                    ...state,
                    loading:true
                }
                case SET_SCREAM:
                    return{
                        ...state,
                        scream:action.payload,
                        loading:false
                    }
                    case COMMENT_ON_SCREAM:
                    return{
                       ...state,
                       comment:action.payload
                    }
            case LIKE_SCREAM:
            case UNLIKE_SCREAM:
                let index= state.screams.findIndex((scream)=>scream.screamid === action.payload.screamid)
                state.screams[index]=action.payload
               return {...state}
               case POST_SCREAM:
                   return{
                       ...state,
                       screams:[
                           action.payload,
                           ...state.screams

                       ]
                   }

            default : return state;
                
               
            
    }
}