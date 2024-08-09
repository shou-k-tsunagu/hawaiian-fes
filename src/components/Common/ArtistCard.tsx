import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface Props {
	id: string;
	name: string;
	description: string;
	image: string[];
	schedule?: {
		day: string[];
		time: string[];
	};
	imgClass?: string;
	sns?: {
		home?: string;
		instagram?: string;
		facebook?: string;
		youtube?: string;
	};
	// dialogInfo?: {
	// 	name: string;
	// 	description: string;
	// 	image: string | string[];
	// 	imgClass?: string;
	// }[];
}

// const { title, subTitle, description, image, imaclassName } = Astro.props;
export const ArtistCard = ({
	id,
	name,
	description,
	image,
	schedule,
	imgClass,
	sns,
}: Props) => {
	return (
		<Dialog>
			<DialogTrigger asChild className="cursor-pointer">
				<div className="w-full md:w-[305px]">
					<img
						src={image[0]}
						alt=""
						className={cn(
							"w-full h-[226px] md:h-[200px] object-cover",
							imgClass,
						)}
					/>
					<p className="text-[14px] md:text-[16px] font-semibold mt-[12px] md:mt-[17px] whitespace-pre-line">
						{name}
					</p>
					{schedule && (
						<div className="bg-[#E0EFF3] p-[16px] my-[10px]">
							<p className="text-[15px] md:text-[16px] font-medium mb-[10px]">
								■演奏スケジュール（予定）
							</p>
							{schedule?.day.map((d, i) => {
								return (
									<div
										key={d.length}
										className="text-[13px] md:text-[14px] leading-[26px]"
									>
										<p className="font-semibold">{d}</p>
										<p className="font-medium">{schedule?.time[i]}</p>
									</div>
								);
							})}
						</div>
					)}
					{/* <p className="text-[14px] md:text-[16px] leading-[28px] md:leading-[20px] mt-[17px] md:mt-[12px] mb-[25px] md:mb-[45px] whitespace-pre-line">{description}</p> */}
				</div>
			</DialogTrigger>
			<DialogContent className="rounded-[16px] md:rounded-[33px] h-auto px-[15px] w-[95%] md:max-w-[803px] md:pt-[40px] md:pl-[50px] md:pr-[20px]">
				<DialogHeader className="text-left">
					<DialogTitle>
						<p className="text-[20px] md:text-[28px] text-red font-semibold">
							{name}
						</p>
					</DialogTitle>
					<DialogDescription className="overflow-y-auto max-h-[493px] text-[#222222]">
						{schedule && (
							<div className="bg-[#E0EFF3] p-[16px] mb-[10px]">
								<p className="text-[15px] md:text-[16px] font-medium mb-[10px]">
									■演奏スケジュール（予定）
								</p>
								{schedule?.day.map((d, i) => {
									return (
										<div
											key={d.length}
											className="text-[13px] md:text-[14px] leading-[26px]"
										>
											<p className="font-semibold">{d}</p>
											<p className="font-medium">{schedule?.time[i]}</p>
										</div>
									);
								})}
							</div>
						)}
						{/* {id === "1" && (
							<div className="w-full mb-[15px]">
								<iframe
									width="100%"
									height="315"
									src="https://www.youtube.com/embed/rMrNO7I_qF0?si=YtPBUXJpYZZnh9s5"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								/>
							</div>
						)} */}
						<div className="flex w-full flex-col md:flex-row">
							<div className="md:w-1/2 md:order-1">
								{image.map((img) => (
									<img
										src={img}
										alt=""
										key={`${img.length}_img`}
										className="mb-[10px] w-full ml-auto"
									/>
								))}
							</div>
							<div className="mt-[16px] md:mt-0 md:w-1/2 md:pr-[15px]">
								{sns && (
									<div className="flex gap-x-[20px]">
										{sns.home && (
											<a href={sns.home} target="_blank" rel="noreferrer">
												<img
													src="/assets/common/home-logo.svg"
													alt=""
													className="w-[50px]"
												/>
											</a>
										)}
										{sns.instagram && (
											<a href={sns.instagram} target="_blank" rel="noreferrer">
												<img
													src="/assets/common/instagram-logo.svg"
													alt=""
													className="w-[50px]"
												/>
											</a>
										)}
										{sns.youtube && (
											<a href={sns.youtube} target="_blank" rel="noreferrer">
												<img
													src="/assets/common/youtube-logo.svg"
													alt=""
													className="w-[50px]"
												/>
											</a>
										)}
										{sns.facebook && (
											<a href={sns.facebook} target="_blank" rel="noreferrer">
												<img
													src="/assets/common/facebook-logo.svg"
													alt=""
													className="w-[50px]"
												/>
											</a>
										)}
									</div>
								)}
								<p className="text-[14px] md:text-[16px] leading-[28px] md:mt-[10px] md:leading-[20px] md:mb-[20px] whitespace-pre-line">
									{description}
								</p>
							</div>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
