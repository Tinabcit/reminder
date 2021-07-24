let Database = {
    cindy: {
        reminders: [
            {
                id: 1,
                title:" To do list one item",
                description: " First Task to be done",
                completed: false,
            },
            {
                id: 2,
                title:" To do list two item",
                description: " Second Task to be done",
                completed: false,
            },
            {
                id: 3,
                title:" To do list third item",
                description: " Third Task to be done",
                completed: false,
            },
            {
                id: 4,
                title:" To do list Fourth item",
                description: " Fourth Task to be done",
                completed: false,
            },
        ],
    },
    alex: {
        reminders:[
            {
                id: 1,
                title:" To do list one item",
                description: " First Task to be done",
                completed: false,
            },
            {
                id: 2,
                title:" To do list two item",
                description: " Second Task to be done",
                completed: false,
            },
            {
                id: 3,
                title:" To do list third item",
                description: " Third Task to be done",
                completed: false,
            },
            {
                id: 4,
                title:" To do list Fourth item",
                description: " Fourth Task to be done",
                completed: false,
            },
        ],
    },
}

Database.cindy.reminders.push({})

module.exports= Database;