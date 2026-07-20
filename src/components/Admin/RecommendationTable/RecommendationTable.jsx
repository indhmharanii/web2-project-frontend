import "./RecommendationTable.css";

const recommendations = [
    {
        id: 1,
        laptop: "ASUS TUF A16",
        user: "Rani Wijaya",
        category: "Gaming",
        date: "15 Jul 2026",
        status: "Pending",
    },
    {
        id: 2,
        laptop: "MSI Cyborg 15",
        user: "Aldi Pratama",
        category: "Gaming",
        date: "14 Jul 2026",
        status: "Approve",
    },
    {
        id: 3,
        laptop: "HP Omen 16",
        user: "Budi Santoso",
        category: "Gaming",
        date: "13 Jul 2026",
        status: "Reject",
    },
    {
        id: 4,
        laptop: "Acer Swift Go 14",
        user: "Siti Aisyah",
        category: "Produktivitas",
        date: "12 Jul 2026",
        status: "Approve",
    },
];

function RecommendationTable() {

    return (

        <div className="admin-recommendation-table-container">

            <table className="admin-recommendation-table">

                <thead>

                    <tr>

                        <th>Laptop</th>

                        <th>Diajukan Oleh</th>

                        <th>Kategori</th>

                        <th>Tanggal</th>

                        <th>Status</th>

                        <th>Aksi</th>

                    </tr>

                </thead>

                <tbody>

                    {recommendations.map((item) => (

                        <tr key={item.id}>

                            <td>{item.laptop}</td>

                            <td>{item.user}</td>

                            <td>{item.category}</td>

                            <td>{item.date}</td>

                            <td>

                                <span
                                    className={`recommendation-status ${item.status.toLowerCase()}`}
                                >
                                    {item.status}
                                </span>

                            </td>

                            <td>

                                <div className="recommendation-action-buttons">

                                    <button
                                        type="button"
                                        className="recommendation-pending-button"
                                    >
                                        Pending
                                    </button>

                                    <button
                                        type="button"
                                        className="recommendation-approve-button"
                                    >
                                        Approve
                                    </button>

                                    <button
                                        type="button"
                                        className="recommendation-reject-button"
                                    >
                                        Reject
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default RecommendationTable;