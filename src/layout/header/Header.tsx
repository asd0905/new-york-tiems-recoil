import { useRecoilValue, useSetRecoilState } from "recoil";
import { headerBtnsAtom, modalAtom, newsParamsAtom } from "../../atoms/atoms";
import CHeaderModal from "../../components/Modal/CHeaderModal";
import CBtn from "../../components/HeaderBtn/CHeaderBtn";
import { IHeaderBtnsTypeProps, INewsParamsProps } from "../../app.constant";
import { SLayout } from "./Header.style";

const Header = () => {
	const setModal = useSetRecoilState(modalAtom);
	const handleModalOpen = () => {
		setModal(true);
	};
	const headerBtnsType = useRecoilValue<IHeaderBtnsTypeProps>(headerBtnsAtom);
	const { headline, date, nation } = headerBtnsType;
	const newsParams = useRecoilValue<INewsParamsProps>(newsParamsAtom);
	return (
		<>
			<SLayout>
				<CBtn
					className={newsParams.q ? "active" : ""}
					onClick={handleModalOpen}
					type={newsParams.q || "전체 헤드라인"}
					img={
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M11.7422 10.3439C12.5329 9.2673 13 7.9382 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.93858 13 9.26801 12.5327 10.3448 11.7415L10.3439 11.7422C10.3734 11.7822 10.4062 11.8204 10.4424 11.8566L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L11.8566 10.4424C11.8204 10.4062 11.7822 10.3734 11.7422 10.3439ZM12 6.5C12 9.53757 9.53757 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5Z'
								fill='#6D6D6D'
							/>
						</svg>
					}
				/>
				<CBtn
					className={newsParams.begin_date ? "active" : ""}
					onClick={handleModalOpen}
					type={newsParams.begin_date ?? "전체 날짜"}
					img={
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.8536 7.14645C11.0488 7.34171 11.0488 7.65829 10.8536 7.85355L7.85355 10.8536C7.75979 10.9473 7.63261 11 7.5 11C7.36739 11 7.24021 10.9473 7.14645 10.8536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L7.5 9.79289L10.1464 7.14645C10.3417 6.95118 10.6583 6.95118 10.8536 7.14645Z'
								fill='#6D6D6D'
							/>
							<path
								d='M3.5 0C3.77614 0 4 0.223858 4 0.5V1H12V0.5C12 0.223858 12.2239 0 12.5 0C12.7761 0 13 0.223858 13 0.5V1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V3C0 1.89543 0.895431 1 2 1H3V0.5C3 0.223858 3.22386 0 3.5 0ZM1 4V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V4H1Z'
								fill='#6D6D6D'
							/>
						</svg>
					}
				/>
				<CBtn
					className={newsParams.fq ? "active" : ""}
					onClick={handleModalOpen}
					type={newsParams.fq ?? "전체 국가"}
				/>
				{nation}
			</SLayout>
			<CHeaderModal />
		</>
	);
};
export default Header;
