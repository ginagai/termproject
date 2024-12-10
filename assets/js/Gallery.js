import React, { useState } from "react";

const Gallery = () => {
    const [images, setImages] = useState([
        { id: 1, src: "image1.jpg" },
        { id: 2, src: "image2.jpg" },
        { id: 3, src: "image3.jpg" },
    ]);

    const handleDrag = (e, id) => {
        e.dataTransfer.setData("imageId", id);
    };

    const handleDrop = (e) => {
        const draggedImageId = e.dataTransfer.getData("imageId");
        const draggedImage = images.find((img) => img.id === parseInt(draggedImageId));
        setImages([...images.filter((img) => img.id !== parseInt(draggedImageId)), draggedImage]);
    };

    return (
        <div>
            <h1>Photo Gallery</h1>
            <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt="Gallery Item"
                        draggable
                        onDragStart={(e) => handleDrag(e, image.id)}
                        style={{ margin: "10px", width: "100px" }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
