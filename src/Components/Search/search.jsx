export const SearchNav = () => {
    return(
    
    <div className="Header">Search
    <input type="text" onkeypress="searchFilter()" class="form-control" placeholder="Search by name or anything" id="searchBar"/>
    </div>
    )
}