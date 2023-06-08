import NavbarAfterLogin from '../Navigation/NavbarAfterLogin'
import './search.css'

const Search = () => {
  return (
    <>
        <NavbarAfterLogin />
        <div class="container">
            <div class="row height d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="form">
                        <i class="fa-sharp fa-magnifying-glass" ></i>
                        <input type="text" class="form-control form-input"  placeholder="Search here..." />
                    </div>
                </div>
            </div>
        </div>
        <div class="searchForm">
            <h2>Filter</h2>
            <div class="searchFormFlex">
                <div class="search1">
                    <a href="">Billyboy Exclusive</a>
                </div>

                <div class="search2">
                    <a href="">Recent Release</a> 
                </div>
            
                <div class="search3">
                    <a href="#"> Recommended Series</a>
                </div>

                <div class="search4">
                    <a href="#"> Complete Series</a>
                </div>

                <div class="search5">
                    <a href="#"> Coming Soon </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Search