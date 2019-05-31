// Any actions that we want to fire off here.

// Make all the HTTP requests

import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
    axios
        .get('/api/leads/', tokenConfig(getState))        //request from /api/leads/
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));     // when catch error, do console.log()

};


// DELETE LEAD
export const deleteLead = (id) => (dispatch, getState) => {
    axios
        .delete('/api/leads/' + id + '/', tokenConfig(getState))        //request from /api/leads/id
        .then(res => {
            dispatch(createMessage({ deleteLead: "Lead Deleted" }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch(err => console.log(err));     // when catch error, do console.log()

};

// ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {
    axios
        .post('/api/leads/', lead, tokenConfig(getState))        //request from /api/leads/
        .then(res => {
            dispatch(createMessage({ addLead: "Lead Added" }));
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};