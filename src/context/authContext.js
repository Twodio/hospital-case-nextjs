const { createContext, useReducer, useEffect, useContext } = require("react");
const jwt = require("jsonwebtoken");

const AuthContext = createContext();

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const actions = {
    SET_USER: 'SET_USER',
    SET_ERROR: 'SET_ERROR',
    SET_LOADING: 'SET_LOADING',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_USER: {
            return { ...state, user: action.payload };
        }
        case actions.SET_ERROR: {
            return { ...state, error: action.payload };
        }
        case actions.SET_LOADING: {
            return { ...state, loading: action.payload };
        }
        default:
            return state;
    }
};

const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Use a useeffect to retrieve the user from the localStorage (not now)

    const value = {
        user: state.user,
        error: state.error,
        loading: state.loading,
        signIn: async ({ username, password }) => {
            try {
                dispatch({ type: actions.SET_ERROR, payload: null });
                dispatch({ type: actions.SET_LOADING, payload: true });
                const response = await fetch("https://localhost:44396/api/auth/login", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({username, password})
                });

                if (!response.ok) {
                    throw new Error(response.status);
                }

                const data = await response.json();

                const user = jwt.decode(data.token);

                const raw = {
                    token: data.token,
                    roles: [user['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'].toUpperCase()],
                    personId: user['http://hospitalcase.test/claims/personId'],
                    username: user['sub']
                } ;

                dispatch({ type: actions.SET_USER, payload: raw});
            } catch (error) {
                dispatch({ type: actions.SET_ERROR, payload: 'something went wrong, please try again later' });
            } finally {
                dispatch({ type: actions.SET_LOADING, payload: false });
            }
        },
        signUp: async ({ ...props }) => {
            
        },
        signOut: async () => {
            dispatch({ type: actions.SET_USER, payload: null });
        },
        setError: (error) => {
            dispatch({ type: actions.SET_ERROR, payload: error });
        }
    };

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

const useAuthStore = () => useContext(AuthContext);

export{
    useAuthStore,
    AuthContextProvider
};