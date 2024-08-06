

export default function Map() {
    return (
        <>

            <section className="map-section">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3270.8696717698117!2d138.6242007!3d-34.9348054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ceb0da1a4aff%3A0xb582ef39aec1600d!2s169%20Fullarton%20Rd%2C%20Dulwich%20SA%205065!5e0!3m2!1sen!2sau!4v1722963787267!5m2!1sen!2sau"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
        </>
    )
}
