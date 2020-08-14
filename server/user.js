const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = name.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if (existingUser) {
        return { err: 'Username exist already'}
    }

    const user = { id, name, room };
    users.push(user);
    return { user }

}

const removedUser = () => {

}

const getUser = () => {

}

const getUsersInRoom = () => {

}