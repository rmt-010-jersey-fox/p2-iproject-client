let baseUrl = 'http://localhost:3000'

$(document).ready(function () {
    console.log("ready!");
    $('section').hide()
    if (localStorage.getItem('token')) {
        fetchCatalog()
        $('#catalog').show()
    }
    else {
        $('#loginForm').show()
    }
    $("#loginSubmit").submit(function (e) {
        e.preventDefault();
        let email = $('#email-login').val()
        let password = $('#password-login').val()
        $.ajax({
            method: 'POST',
            url: baseUrl + '/login',
            data: { email, password }
        })
            .done(response => {
                localStorage.setItem('token', response.token)
                $('#email-login').val('')
                $('#password-login').val('')
                $('section').hide()
                $('#catalog').show()
            })
            .fail(err => {
                console.log(err);
            })
    });
    $('#navCatalog').click(function (event) {
        event.preventDefault()
        $('section').hide()
        fetchCatalog()
        $('#catalog').show()
    })
    $('#navMyList').click(function (event) {
        event.preventDefault()
        $('section').hide()
        fetchWishList()
        $('#wishList').show()
    })
    $("#navLogout").click(function (event) {
        event.preventDefault()
        localStorage.removeItem('token')
        $('section').hide()
        $('#loginForm').show()
    });
});

function fetchCatalog() {
    $('#catalogCard').empty()
    $.ajax({
        method: 'GET',
        url: baseUrl + '/books',
        headers: {
            token: localStorage.getItem('token')
        }
    })
        .done(response => {
            response.forEach(e => {
                let { id, isbn, publisher, description, title, author, bookImage, productURL } = e
                // console.log(isbn, publisher, description, title, author, bookImage, productURL);
                $('#catalogCard').append(`
                <div class="col-3 mt-4" >
                    <div class="card overflow-auto" style="height:70vh">
                        <img src="${bookImage}" class="card-img-top" alt="...">
                        <div class="card-body ">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>

                            <span class="card-text"><strong>Author: </strong>${author}</span><br>
                            <span class="card-text"><strong>Publisher: </strong>${publisher}</span><br>
                            <p class="card-text"><strong>ISBN: </strong>${isbn}</p>
                            <p>Buy :<a href="${productURL}" target = "_blank"> Amazon </a></p>
                            
                        </div>
                        
                    </div>
                    <div class="card text-center ">
                        <button onclick="addToWishList(event,${id})" class="btn btn-primary" >Add To Wish List</button>
                    </div>
                </div>
                `)
            });
        })
        .fail(err => {
            console.log(err);
        })
}

function fetchWishList(event) {
    // event.preventDefault()
    $('#wishListCard').empty()
    $.ajax({
        method: 'GET',
        url: baseUrl + '/favouriteBooks/',
        headers: {
            token: localStorage.getItem('token')
        }
    })
        .done(response => {
            response.forEach(e => {
                let { id, isbn, publisher, description, title, author, bookImage, productURL } = e
                $('#wishListCard').append(`
                <div class="col-3 mt-4" >
                    <div class="card overflow-auto" style="height:70vh">
                        <img src="${bookImage}" class="card-img-top" alt="...">
                        <div class="card-body ">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>

                            <span class="card-text"><strong>Author: </strong>${author}</span><br>
                            <span class="card-text"><strong>Publisher: </strong>${publisher}</span><br>
                            <p class="card-text"><strong>ISBN: </strong>${isbn}</p>
                            <p>Buy :<a href="${productURL}" target = "_blank"> Amazon </a></p>
                            
                        </div>
                        
                    </div>
                    <div class="card text-center ">
                        <button onclick="addToWishList(event,${id})" class="btn btn-danger" >Delete From Wish List</button>
                    </div>
                </div>
                `)
            });
        })
        .fail(err => {
            console.log(err);
        })
}

function destroy(event, id) {
    event.preventDefault();
    // console.log(id);
    $.ajax({
        method: "DELETE",
        url: baseUrl + `/favouriteBooks/${id}`,
        headers: {
            token: localStorage.getItem('token')
        }
    })
        .done(response => {
            $('section').hide()
            fetchWishList()
            $('#wishList').show()
        })
        .fail(err => {
            console.log(err);
        })
}

function addToWishList(event, id) {
    event.preventDefault()
    $.ajax({
        method: "POST",
        url: baseUrl + `/favouriteBooks/`,
        data: {
            bookId: id
        },
        headers: {
            token: localStorage.getItem('token')
        }
    })
        .done(response => {
            // console.log(response);
        })
        .fail(err => {
            console.log(err);
        })

}