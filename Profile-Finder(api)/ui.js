class UI {
    constructor() {
        this.profilContainer = document.querySelector('#profilContainer');

        this.alert = document.querySelector("#alert");
    }

    showProfile(profile) {

        this.profilContainer.innerHTML = `

        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                <a href="https://placeholder.com">
                <img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>



                </div>
                <div class="col-md-9">
                    <h4>Contact</h4>
                    <ul class="list-group">

                        <li class="list-group-item">
                        Name : ${profile.name}
                        </li>

                        <li class="list-group-item">
                        UserName : ${profile.username}
                        </li>

                        <li class="list-group-item">
                        Mail : ${profile.email}
                        </li>

                        <li class="list-group-item">
                        Address : ${profile.address.street}
                        ${profile.address.city}
                        ${profile.address.zipcode}
                        ${profile.address.suite}
                        </li>
                        
                        
                        <li class="list-group-item">
                        Phone : ${profile.phone}
                        </li>

                        <li class="list-group-item">
                        WebSite : ${profile.website}
                        </li>

                        <li class="list-group-item">
                        Company : ${profile.company.name}
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        `;

    }

    showAlert(text){
        this.alert.innerHTML=`${text} in not found.`;
    }

    clear(){
        this.profilContainer.innerHTML="";
        this.alert.innerHTML="";
    }


} 