import React from "react";

class FormFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: 'Décris ci-dessous pourquoi as-tu aimé ce film ?',
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
    
            //Création de l'url appelant la base de données "films" ???
            const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

        
            //Création du "fetch" pour envoyer les données via le formulaire
            fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Film ajouté avec l'ID ${res}!`);
                }
            })
            .catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'un film');
            });
    }
    
    render() {
        return (
            <div className="FormEmployee">
                <h1>Saisi d'un film</h1>

                <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Informations sur le film à ajouter</legend>
                    
                    <div className="form-data">
                    <label htmlFor="filmname">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={this.onChange}
                        value={this.state.name}
                    />
                    </div>

                    <div className="form-data">
                    <label htmlFor="poster">Poster</label>
                    <input
                        type="text"
                        id="poster"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.poster}
                    />
                    </div>

                    <div className="form-data">
                    <label htmlFor="comment"> Avis</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="7"
                        cols="45"
                        onChange={this.onChange}
                        value={this.state.comment}
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

export default FormFilm;