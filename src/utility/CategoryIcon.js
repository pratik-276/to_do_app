export const categoryToIcon = (category) => {
    switch(category){
        case "task":
            return <i className="material-icons circle">work</i>;
        case "quit":
            return <i class="material-icons red lighten-2 circle">do_not_disturb</i>;
        case "meditation":
            return <i class="material-icons purple darken-3 circle">accessibility</i>
        case "health":
            return <i class="material-icons green circle">local_hospital</i>;
        case "nutrition":
            return <i class="material-icons orange circle">local_dining</i>;
        case "exercise":
            return <i class="material-icons indigo circle">directions_run</i>;
        case "study":
            return <i class="material-icons purple lighten-3 circle">school</i>;
        default:
            return <i className="material-icons circle">work</i>;
    }
}