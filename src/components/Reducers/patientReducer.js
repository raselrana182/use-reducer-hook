export const patientState = {
    patients: []
}

export const patientReducer = (state, action) =>{
    switch (action.type){
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allpatients = [...state.patients, newPatient];
            return {patients: allpatients};
        case 'REMOVE_PATIENT':
            const remaining = state.patients.filter(pt=>pt.id !== action.id);
            const newState = {patients: remaining};
            return newState;
        default:
            return state;
    }
}