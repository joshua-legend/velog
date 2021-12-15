{

    /*
    * Intersection Types : &
    * */

    type Student ={
        name : string,
        score : number;
    };

    type Worker = {
        employeeId : number,
        work : () => void;
    };


    function internWork(person:Student & Worker) {
        console.log(person.name, person.score, person.employeeId, person.work())
    }

    internWork({
        name: 'joshua',
        score: 100,
        employeeId: 12345,
        work: () => {console.log("working!")}
    });


}