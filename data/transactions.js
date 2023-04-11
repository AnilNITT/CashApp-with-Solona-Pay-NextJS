import avatar from "../public/man.jpg"

export const Transactions = [
    {
        id: '1',
        from: {
            name: 'Anil Patidar',
            handle: 'Anil',
            avatar: avatar.src,
            verified: false,
        },
        to: {
            name: 'Anil patidar',
            handle: 'Anil',
            avatar: avatar.src,
            verified: true,
        },
        description: 'Payment for Netflix project',
        transactionDate: new Date(),
        status: 'Completed',
        amount: 0.01,
        source: 'Capital One',
        identifier: '#0VFBZEC',
    },
    {
        id: '2',
        from: {
            name: 'Anil Patidar',
            handle: 'Anil',
            avatar: avatar.src,
            verified: false,
        },
        to: {
            name: 'Ajay Dangi',
            handle: 'Ajay',
            avatar: 'https://ca.slack-edge.com/T8JR01VL4-U02AQ23D15X-63795a2d421c-72',
            verified: false,
        },
        description: 'Payment for Cash App project',
        transactionDate: new Date(),
        status: 'Incomplete',
        amount: 123.45,
        source: 'Capital One',
        identifier: '#0VFBZEC',
    },
    {
        id: '3',
        from: {
            name: 'Anil Patidar',
            handle: 'Anil',
            avatar: avatar.src,
            verified: false,
        },
        to: {
            name: 'David Rakosi',
            handle: 'davidrakosi',
            avatar: 'https://ca.slack-edge.com/T8JR01VL4-U01A8CULZ99-22c5b19dd0a7-72',
            verified: false,
        },
        description: 'Payment for Airbnb project',
        transactionDate: new Date(),
        status: 'Completed',
        amount: 999,
        source: 'Capital One',
        identifier: '#0VFBZEC',
    },
]
