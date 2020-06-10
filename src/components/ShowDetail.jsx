import React from 'react'


class ShowDetail extends React.Component {

    url = "http://www.omdbapi.com/?apikey=ddf13da4";

    componentDidMount = async () => {

        let response = await fetch("https://striveschool.herokuapp.com/api/comments/", {
            headers: new Headers({
                Authorization: "Basic " + btoa("user6:4SdE6yRXfXAUHrKM"),
                "Content-Type": "application/json",
            })
        })

    }

    render() {
        return (
            <h1>{this.props.match.params.id}</h1>
        )
    }

}

export default ShowDetail