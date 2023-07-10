// Create a place in the scene
function createPlace(id, title, thumbnail, image) {
    const placesContainer = document.querySelector('#places-container');

    // Place entity
    const place = document.createElement('a-entity');
    place.setAttribute('id', id);
    place.setAttribute('visible', false);
    place.setAttribute('geometry', {
        primitive: 'circle',
        radius: 2
    });
    place.setAttribute('position', { x: 0, y: 0, z: -10 });

    // Thumbnail entity
    const thumbnailEntity = document.createElement('a-entity');
    thumbnailEntity.setAttribute('geometry', {
        primitive: 'circle',
        radius: 1.5
    });
    thumbnailEntity.setAttribute('material', { src: thumbnail });
    place.appendChild(thumbnailEntity);

    // Title entity
    const titleEntity = document.createElement('a-entity');
    titleEntity.setAttribute('text', {
        align: 'center',
        width: 4,
        wrapCount: 12,
        value: title
    });
    titleEntity.setAttribute('position', { x: 0, y: -2.5, z: 0 });
    place.appendChild(titleEntity);

    // Image entity
    const imageEntity = document.createElement('a-entity');
    imageEntity.setAttribute('visible', false);
    imageEntity.setAttribute('geometry', {
        primitive: 'sphere',
        radius: 10
    });
    imageEntity.setAttribute('material', { src: image, side: 'double' });
    place.appendChild(imageEntity);

    placesContainer.appendChild(place);
}

// Create a thumbnail for a place
function createThumbnail(id, thumbnail, position) {
    const thumbnailEntity = document.createElement('a-entity');
    thumbnailEntity.setAttribute('id', id);
    thumbnailEntity.setAttribute('geometry', {
        primitive: 'circle',
        radius: 1
    });
    thumbnailEntity.setAttribute('material', { src: thumbnail });
    thumbnailEntity.setAttribute('position', position);

    return thumbnailEntity;
}

// Show a place
function showView(id) {
    const place = document.getElementById(id);
    const thumbnails = document.querySelectorAll('.thumbnail');

    place.setAttribute('visible', true);

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].setAttribute('visible', false);
    }
}

// Hide all places
function hideEl(className) {
    const elements = document.querySelectorAll(className);

    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute('visible', false);
    }
}
