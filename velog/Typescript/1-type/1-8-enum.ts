{

    // Enum을 지양 한다 -> union type 지향
    enum Days {Monday,Tuseday,Wednesday,Thursday,Friday,Saturday,Sunday}

    console.log(Days.Sunday);
    const day = Days.Friday;
    console.log(day)

    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

    let day1 : DaysOfWeek = "Monday";
    day1 = "Tuesday";

}