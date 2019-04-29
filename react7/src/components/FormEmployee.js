import React from "react";

class FormEmployee extends React.Component {
    //Création du state en ES5
    constructor(props) {
        super(props);
        this.state = {
            lastname: '',
            firstname: '',
            email: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    //Création de la méthode "onChange"
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    //Création de la méthode de soumission du formulaire
    submitForm(e) {
        e.preventDefault();
    
            //Création de la configuration appelée par le "fetch"
            const config = {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
            };
    
            //Création de l'url appelant la base de données "employees" ???
            const url = "http://campus-bordeaux.ovh:3001/api/quests/employees/";

        
            //Création du "fetch" pour envoyer les données via le formulaire
            fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Employé ajouté avec l'ID ${res}!`);
                }
            })
            .catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'un employé');
            });
    }


    render() {
        return (
            <div className="FormEmployee">
                <h1>Saisi d'un employé</h1>

                {/* Création du formulaire */}
                <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                    <label htmlFor="lastname">Nom</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        onChange={this.onChange}
                        value={this.state.lastname}
                    />
                    </div>

                    <div className="form-data">
                    <label htmlFor="firstname">Prénom</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        onChange={this.onChange}
                        value={this.state.firstname}
                    />
                    </div>

                    <div className="form-data">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                    />
                    </div>
                    <hr />
                    <div className="form-data">
                    <input type="submit" value="Envoyer" />
                    </div>
                </fieldset>
                </form>
            </div>
        );
    }

}

export default FormEmployee;


