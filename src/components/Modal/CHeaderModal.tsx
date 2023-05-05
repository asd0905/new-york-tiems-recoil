import { forwardRef, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SDateBtn, SHeaderModal } from "./CModal.style";
import DatePicker from "react-datepicker";
import useOutSideClickHandler from "../../hooks/useOutSideClickHandler";
import CModal from "./CModal";
import {
	isSearchAtom,
	modalAtom,
	newsListAtom,
	newsParamsAtom,
} from "../../atoms/atoms";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { INewsParamsProps, NEW_YORK_TIMES_API_KEYS } from "../../app.constant";
import { UseFetchNews } from "../../hooks/useFetchNews";
// import { UseInfiniteFetchSearch } from "../../hooks/useInfiniteFetchSearch";

type CustomDatePickerProps = {
	value?: string;
	onClick?: () => void;
};

const CHeaderModal = () => {
	const modalRef = useRef<HTMLDivElement | null>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [nation, setNation] = useState<string>("");
	const [modal, setModal] = useRecoilState<boolean>(modalAtom);
	const [isSearch, setIsSearch] = useRecoilState<boolean>(isSearchAtom);
	const nationMap: Map<string, string> = new Map([
		["대한민국", "SOUTH KOREA"],
		["중국", "CHINA"],
		["일본", "JAPAN"],
		["미국", "UNITED STATES"],
		["북한", "NORTH KOREA"],
		["러시아", "RUSSIA"],
		["프랑스", "FRANCE"],
	]);
	const nationMapKey: string[] = Array.from(nationMap.keys());
	const [newParams, setNewsParams] =
		useRecoilState<INewsParamsProps>(newsParamsAtom);
	const resetNewsParams = useResetRecoilState(newsParamsAtom);

	const handleClickNation = (nation: string) => {
		console.log(nationMap.get(nation));
		setNation(nation);
	};
	// const { data, refetch } = UseInfiniteFetchSearch();

	/** 검색하기 */
	const handleSearch: SubmitHandler<any> = (e) => {
		resetNewsParams();

		if (nation) {
			setNewsParams((prev) => ({
				...prev,
				fq: `glocations:(${nationMap.get(nation)})`,
			}));
		}

		if (startDate) {
			setNewsParams((prev) => ({
				...prev,
				begin_date: startDate.toString(),
				end_date: startDate.toString(),
			}));
		}

		if (e.headlineSearch) {
			setNewsParams((prev) => ({
				...prev,
				q: e.headlineSearch,
			}));
		}

		setIsSearch(true);
		// refetch();
	};

	/** 모달 끄기 */
	const handleModalCloe = () => {
		reset();
		setNation("");
		setStartDate(null);
		setModal(false);
	};
	useOutSideClickHandler({ ref: modalRef, callback: handleModalCloe });

	/** 달력 커스텀 함수 */
	const CustomDatePicker = forwardRef<HTMLButtonElement, CustomDatePickerProps>(
		({ value, onClick }, ref) => {
			return (
				<SDateBtn onClick={onClick} ref={ref} as='button'>
					{value || "날짜를 선택해주세요"}
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10.8536 7.14645C11.0488 7.34171 11.0488 7.65829 10.8536 7.85355L7.85355 10.8536C7.75979 10.9473 7.63261 11 7.5 11C7.36739 11 7.24021 10.9473 7.14645 10.8536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L7.5 9.79289L10.1464 7.14645C10.3417 6.95118 10.6583 6.95118 10.8536 7.14645Z'
							fill='#C4C4C4'
						/>
						<path
							d='M3.5 0C3.77614 0 4 0.223858 4 0.5V1H12V0.5C12 0.223858 12.2239 0 12.5 0C12.7761 0 13 0.223858 13 0.5V1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V3C0 1.89543 0.895431 1 2 1H3V0.5C3 0.223858 3.22386 0 3.5 0ZM1 4V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V4H1Z'
							fill='#C4C4C4'
						/>
					</svg>
				</SDateBtn>
			);
		}
	);

	useEffect(() => {
		// useInfiniteFetchNews();
		UseFetchNews({ pageParam: 1 }, newParams);
	}, [newParams]);

	return (
		<CModal>
			<SHeaderModal ref={modalRef}>
				<form onSubmit={handleSubmit(handleSearch)}>
					<div className='headlineBox'>
						<label htmlFor='headline'>
							<h3>헤드라인</h3>
							<input
								placeholder='검색한 헤드라인을 입력해주세요.'
								{...register("headlineSearch", {
									required: false,
									pattern: {
										value: /^[^\s][\w\s\d]/gi,
										message: "숫자/영어만 가능합니다.",
									},
								})}
							/>
						</label>
						<span>{errors?.headlineSearch?.message as string}</span>
					</div>

					<div className='dateBox'>
						<h3>날짜</h3>
						<DatePicker
							dateFormat='yyyy.MM.dd'
							placeholderText='날짜를 선택해주세요'
							selected={startDate}
							onChange={(date: Date) => {
								setStartDate(date);
							}}
							customInput={<CustomDatePicker />}
						/>
					</div>

					<div className='nationBox'>
						<h3>국가</h3>
						<ul>
							{nationMapKey.map((d) => (
								<li
									key={d}
									onClick={() => handleClickNation(d)}
									className={
										nationMap.get(nation) === nationMap.get(d) ? "active" : ""
									}
								>
									{d}
								</li>
							))}
						</ul>
					</div>
					<button className='modalBtn'>필터 적용하기</button>
				</form>
			</SHeaderModal>
		</CModal>
	);
};
export default CHeaderModal;
