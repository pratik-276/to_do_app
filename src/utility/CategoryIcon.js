export const categoryToIcon = (category) => {
    switch(category){
        case "task":
            return <i className="material-icons black lighten-2 circle grey-text">work</i>;
        case "quit":
            return <i class="material-icons red lighten-2 circle white-text">do_not_disturb</i>;
        case "meditation":
            return <i class="material-icons purple darken-3 circle white-text">accessibility</i>
        case "health":
            return <i class="material-icons green circle white-text">local_hospital</i>;
        case "nutrition":
            return <i class="material-icons orange circle white-text">local_dining</i>;
        case "exercise":
            return <i class="material-icons indigo circle white-text">directions_run</i>;
        case "study":
            return <i class="material-icons purple lighten-3 circle white-text">school</i>;
        default:
            return <i className="material-icons circle white-text">work</i>;
    }
}