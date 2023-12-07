const Contacts = () => {
  return (
		<main className='section'>
			<div className='container'>
				<h1 className='title-1'>Контакты</h1>

				<ul className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Локация</h2>
						<p>Железногорск-Илимский, Россия</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Телефон / WhatsApp</h2>
						<p>
							<a href='tel:+79246104574'>+7 (924) 610-45-74</a>
						</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Email</h2>
						<p>
							<a href='mailto:nata.grigorak@mail.ru'>nata.grigorak@mail.ru</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	)
}
 
export default Contacts;