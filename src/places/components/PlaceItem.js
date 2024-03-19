import './PlaceItem.css'

import Button from '../../shared/components/Buttons/Button'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true)
    const closeMapHandler = () => setShowMap(false)
    const modalMap = (
        <Modal show={showMap} onHide={closeMapHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!

                <Button variant="secondary" onClick={closeMapHandler}>
                    Close
                </Button>
                <Button variant="primary" onClick={closeMapHandler}>
                    Save Changes
                </Button>
            </Modal.Body>
            <Modal.Footer>Footer</Modal.Footer>
        </Modal>
    )
    return (
        <>
            {modalMap}
            <div className='col-4'>
                <div class="card border-0">
                    <img src={props.image} />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <Button className="btn btn-warning" onClick={openMapHandler}>View on map</Button>
                    </div>
                </div>
            </div>
            {/* <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary-emphasis">{props.title}</strong>
                        <div class="mb-1 text-body-secondary">{props.creator}</div>
                        <p class="card-text mb-auto">{props.description}</p>
                    </div>
                    <div class="col p-4 d-flex flex-column position-static">
                        <Button className="btn btn-default" onClick={openMapHandler}>View on map</Button>
                        <Button className="btn btn-default" to={`/places/${props.id}`}>Edit</Button>
                        <Button className="btn btn-default">Delete</Button>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img src={props.image} width="100" height="100" />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default PlaceItem;