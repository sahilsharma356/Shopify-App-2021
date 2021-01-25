import { storage } from '../../config/fbConfig'

export const createImage = (image) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        const prof = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        
        const uploadTask = storage.ref(`images/${image.image.name}`).put(image.image);

        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage.ref("images")
                .child(image.image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url)
                    firestore.collection('images').add({
                        title: image.title,
                        authorFirstName: prof.firstName,
                        authorLastName: prof.lastName,
                        authorID: authorID,
                        createdAt: new Date(),
                        source: url
                    }).then(() => {
                        dispatch({type: 'ADD_IMAGE', image: image})
                    }).catch((err) => {
                        dispatch({type: 'ADD_IMAGE_ERR', err})
                    })
                })
            }
        )
        
    }
};