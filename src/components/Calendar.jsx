import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

export default function Calendar() {
  return (
    <div className="calendario">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        weekends={true} // Mostrar fines de semana
        columnHeaderFormat={{
          weekday: "short",
          month: "numeric",
          day: "numeric",
          omitCommas: true,
        }} // Formato de encabezado de columnas
        slotDuration="00:45:00" // Duración de las divisiones de hora
        slotLabelInterval="00:45" // Intervalo de etiquetas de hora
        slotMinTime="06:45:00" // Hora de inicio del calendario
        slotMaxTime="21:45:00" // Hora de finalización del calendario
        height="auto" // Altura automática
        allDaySlot={false} // No mostrar ranuras de todo el día
        nowIndicator={false} // Mostrar indicador de ahora
        selectable={true} // Permitir selección de rangos
        selectMirror={true} // Mostrar selección mientras se arrastra
        select={(info) => console.log(info.startStr, info.endStr)} // Función de callback al seleccionar un rango
      />
    </div>
  );
}
