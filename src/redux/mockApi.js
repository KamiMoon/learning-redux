
let id = 0;

const defaultData = {
    tasks: [
        {
            _id: ++id,
            name: "Eric Yo",
            hoursWorkedOn: 6,
            estimatedHours: 8,
            status: 'Not Started'
        },
        {
            _id: ++id,
            name: "Nemesis",
            hoursWorkedOn: 5,
            estimatedHours: 9,
            status: 'Not Started'
        }
    ]
}

const TIMEOUT = 100;

export default {
    getTasks: (cb, timeout) => setTimeout(() => cb(defaultData.tasks), timeout || TIMEOUT)
}