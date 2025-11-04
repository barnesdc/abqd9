// export default function Calendar() {
//     return (
//     <section>
//         <h1>Community Calendar</h1>
//         <p className="muted">Embed your Google Calendar here for automatic updates.</p>
//         <div style={{marginTop: '1rem'}}>
//             {/* Replace the src with your public Google Calendar embed link */}
//             <iframe
//             title="ABQD9 Calendar"
//             // src="https://calendar.google.com/calendar/embed?src=YOUR_PUBLIC_CAL_ID&ctz=America%2FDenver"
//             src="https://calendar.google.com/calendar/embed?src=iotapsilambda%40gmail.com&ctz=America%2FDenver"
//             style={{ border: 0, width: '100%', height: '70vh' }}
//             frameBorder="0"
//             scrolling="no"
//             />
//         </div>
//     </section>
//     )
// }

export default function Calendar() {
  return (
    <section className="calendar-section">
      <h1>Community Calendar</h1>
      <p className="muted">
        Stay up to date with community, chapter, and citywide events.
      </p>

      <div className="calendar-container">
        <iframe
          title="ABQD9 Calendar"
          src="https://calendar.google.com/calendar/embed?title=ABQ%20D9%20Calendar&showTitle=0&wkst=1&bgcolor=%23222222
&src=iotapsilambda%40gmail.com&color=%23856508
&src=u44je2bqekrplb537d2qtlbnfg%40group.calendar.google.com&color=%232F6309
&src=kapsi.abq.alumni%40gmail.com&color=%23711616
&src=7df1k094j24fnkiil8s6p1n4hc%40group.calendar.google.com&color=%235229A3
&src=jm9blbeimkv0nf6d29at9bcj1cia1mqr%40import.calendar.google.com&color=%23A32929
&src=d246o5dcdip1usuuu52vfrma8o%40group.calendar.google.com&color=%2386b3ff
&src=6of541pa0635k8rsg8od0nnf68%40group.calendar.google.com&color=%232952A3
&src=trediva06%40gmail.com&color=%23AB8B00
&src=en.usa%23holiday%40group.v.calendar.google.com&color=%23333333
&ctz=America%2FDenver"
          frameBorder="0"
          scrolling="no"
          style={{
            border: '1px solid #555',
            borderRadius: '10px',
            width: '100%',
            height: '75vh',
            backgroundColor: '#222',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>
    </section>
  )
}
