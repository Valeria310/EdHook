import "./Schedule.css";

export const Schedule = (props) => {
    //
    const students = Array(6).fill("Anna Ivanova");
    const studentsList = Array(6);
    for (let i = 0; i < students.length; i++) {
        studentsList[i] = (
            <li className="student-name-item cell" key={i + 1}>
                {students[i]}
            </li>
        );
    }
    //
    const days = Array(31);
    for (let i = 0; i < days.length; i++) {
        days[i] = (
            <li className="day-cell cell" key={i + 1}>
                {i + 1}
            </li>
        );
    }
    //
    const trainCell = Array(days.length);
    const studentTrain = Array(studentsList.length);

    for (let i = 0; i < studentsList.length; i++) {
        trainCell[i] = <li className=" train-cell cell" key={i}></li>;
    }
    for (let i = 0; i < days.length; i++) {
        studentTrain[i] = (
            <ul className="train-cell-list" key={i}>
                {trainCell}
            </ul>
        );
    }
    //
    console.log(days);
    console.log(studentsList);
    return (
        <div className="schedule">
            <div className="table-header">Март, 2023</div>
            <div className="table-main">
                <div className="table-names">
                    <ul className="schedule-student-list">
                        <li className="student-name-item cell">ФИО</li>
                        {studentsList}
                    </ul>
                </div>
                <div className="table-dates">
                    <ul className="dates-list">{days}</ul>
                    <ul className="trains-list">{studentTrain}</ul>
                </div>
                <div className="table-payment">
                    <ul className="payment-list">
                        <li className="payment-item cell">Оплата</li>
                        <li className="payment-item cell"></li>
                        <li className="payment-item cell"></li>
                        <li className="payment-item cell"></li>
                        <li className="payment-item cell"></li>
                        <li className="payment-item cell"></li>
                        <li className="payment-item cell"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
