import "./style.css";

const Header = () => {
  return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						Меня зовут<em> Наталья Плескач</em>
					</strong>
					<br />я занимаюсь веб-дизайном и разработкой сайтов
				</h1>
				<div className='header__text'>
					<p>
						«Дизайн - это не просто то, как он выглядит и ощущается. Дизайн -
						это то, как это работает ». - Стив Джобс.
					</p>
				</div>
				<a href='#!' className='btn'>
					Download CV
				</a>
			</div>
		</header>
	)
}
 
export default Header;