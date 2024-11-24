import React from "react";


export default function Body() {
	return (
		<div className="body">
			<h3 className="title">Обо мне</h3>
			<div className="detail">Я квалифицированный QA инженер с опытом работы более 3 лет в области тестирования программного обеспечения. Моя работа всегда была сосредоточена на обеспечении высокого качества продуктов, тщательном тестировании функциональности и выявлении багов до выпуска продукта. Отличаюсь вниманием к деталям, аналитическим мышлением и способностью эффективно взаимодействовать с командами разработчиков и менеджеров проектов. Стремлюсь постоянно совершенствоваться в своей профессии, изучая новые технологии и подходы к тестированию. Целеустремленность, ответственность и умение работать в команде помогают мне достигать высоких результатов в работе </div>
			<h3 className="title">Technical Skills</h3>
			<table className="table bcard-table">
				<tbody>
					<tr>
						<th>Database</th>
						<td>Postgre SQL, Mongo DB, Microsoft SQL Server 2008</td>
					</tr>
					<tr>
						<th>Web Technologies</th>
						<td>HTML, CSS, XML, REST API, JSON</td>
					</tr>
					<tr>
						<th>IDEs/Tools </th>
						<td>Postman, Charles, DevTools, METAbase, Kibana, Sentry, Jaeger, Git, VS code, Android studio, Doker, Kafka, </td>
					</tr>
					<tr>
						<th>Портфолио работ</th>
						<td>
						<button className="btn  btn-light"><a href="https://miro.com/app/board/uXjVLMbKC94=/?share_link_id=753513190834" target="_blank" rel="noreferrer"><span>Miro Чек лист форма авторизации</span></a></button>
						<button className="btn  btn-light"><a href="https://miro.com/app/board/uXjVLMbKC9U=/?share_link_id=135775518111" target="_blank" rel="noreferrer"><span>Miro чек лист API авторизации пользователя</span></a></button>
						<button className="btn  btn-light"><a href="https://3.downloader.disk.yandex.ru/preview/0df91c316ce04789f2a648aafb53db09264b22a18985391b992d85a441fc5bac/inf/iX-viWKTbFALpFEbrH7gAR2HfoXRiItzHWW139MQE_xeCypwDtd6YbhBbxlPqSoyxttQwF9Tb49TF1bMJmBVxw%3D%3D?uid=1899450028&filename=2024-11-19_23-39-41.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1899450028&tknv=v2&size=1920x935" target="_blank" rel="noreferrer"><span>Тест кейс</span></a></button>
						<button className="btn  btn-light"><a href="https://3.downloader.disk.yandex.ru/preview/16b8061c63f45b39ea5bc1c3f2d595f8cb5fb68c22346c3ab27cc818e4abbb10/inf/dg8Sxgy2tgFPQqgRei1Nsx6zY4BA49wiOCO7ZGtkkqI4g11obHz5ZhHBl-DFB879r6_zcM7ri-M67K4kjhTajw%3D%3D?uid=1899450028&filename=collage%20%284%29.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1899450028&tknv=v2&size=1920x935" target="_blank" rel="noreferrer"><span>Баг репорт</span></a></button>
						</td>
					</tr>
					<tr>
						<th>Образование</th>
						<td><button className="btn  btn-light"><a href="https://static.tildacdn.com/tild6532-6438-4665-a465-333932653931/mong03b.gif" target="_blank" rel="noreferrer"><span>Сertificate screenshot</span></a></button></td>
					</tr>
				</tbody>
			</table>
		</div>
	)

}