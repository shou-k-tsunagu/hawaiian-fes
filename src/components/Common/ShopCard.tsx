import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export interface Props {
	id?: string;
	shopNo?: string;
	title: string;
	subTitle?: string;
	menu: string;
	description: string;
	image: string;
	imgClass?: string;
	shopImage?: string;
	dialogInfo?: {
		title: string;
		price: string;
		catchcopy?: string;
		description: string;
		image: string | string[];
		imgClass?: string;
	}[];
}

// const { title, subTitle, description, image, imaclassName } = Astro.props;
export const ShopCard = ({
	id,
	shopNo,
	title,
	subTitle,
	menu,
	description,
	image,
	imgClass,
	shopImage,
	dialogInfo,
}: Props) => {
	return (
		<Dialog>
			<DialogTrigger asChild className="cursor-pointer">
				<div className="flex flex-col drop-shadow-og w-[calc(50%-4px)] md:max-w-[305px] rounded-[18px] md:rounded-[30px] bg-white px-[15px] md:px-[23px] pb-[23px] pt-[15px] md:pt-[23px] text-black">
					{/* <p className="mt-[9px] text-[16px] md:text-[22px] font-semibold text-blue">
						{`${shopNo ? shopNo : id}.${title}`}
					</p>
					<p className="text-[12px] md:text-[16px] text-blue">
						{subTitle || "　"}
					</p> */}
					<img src={shopImage} alt="" className="" />
					{image && (
						<img
							src={image}
							alt=""
							className={clsx(
								"mb-[8px] mt-[14px] max-h-[202px] md:w-[260px] rounded-[16px] border border-[#D9D9D9]",
								imgClass ? imgClass : "object-cover",
							)}
						/>
					)}
					<p className="mt-[14px] text-[13px] md:text-[18px] font-semibold whitespace-pre-line">
						{menu}
					</p>
					<p className="text-[13px] md:text-[16px] font-medium mb-[30px] mt-[7px] md:mt-[9px]">
						{description}
					</p>
					<div className="text-center text-[13px] md:text-[14px] font-semibold text-blue mt-auto">
						もっと詳しく
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className="rounded-[16px] md:rounded-[33px] h-auto px-[15px] w-[95%] md:max-w-[803px] md:pl-[50px] md:pr-[40px]">
				<DialogHeader className="text-left">
					<DialogTitle>
						{/* <p className="text-[20px] md:text-[28px] text-blue font-semibold">
							{title}
						</p>
						<p className="text-[14px] md:text-[22px] text-blue font-normal mt-[8px]">
							{subTitle || "　"}
						</p> */}
						<img src={shopImage} alt="" className="w-[500px] mx-auto" />
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className="overflow-y-auto max-h-[493px] text-[#222222]">
					{dialogInfo?.map((info) => {
						// if (info.image !== "") {
						return (
							<div
								key={info?.title}
								className="flex flex-col justify-between md:flex-row border-b border-[#CCCCCC] md:border-none md:gap-x-[72px] mb-[20px] md:mb-[30px] md:mr-[5px]"
							>
								{typeof info.image === "string" ? (
									info.image && (
										<img
											src={info?.image}
											alt=""
											className={cn(
												"order-0 mt-[10px] md:mt-0 md:order-1 max-h-[245px] w-full md:max-w-[244px] md:h-[190px] mx-auto md:mx-0 object-cover border border-[#CCCCCC] rounded-[15px]",
												info?.imgClass,
											)}
										/>
									)
								) : (
									<div className="order-0 md:order-1 w-full md:max-w-[244px] mx-auto md:mx-0">
										{info.image.map((img) => (
											<img
												src={img}
												alt=""
												key={`${img.length}_img`}
												className={cn(
													"mt-[10px] w-full max-h-[245px] md:h-[190px] border border-[#CCCCCC] rounded-[15px]",
													info?.imgClass,
												)}
											/>
										))}
									</div>
								)}
								<div className="mt-[16px]">
									<p className="text-[16px] md:text-[22px] font-semibold leading-[30px]">
										{info?.title}　{info?.price ? `${info.price}円` : ""}
									</p>
									<div className="my-[18px] font-semibold text-[16px] md:text-[18px] leading-[30px]">
										{info?.catchcopy && (
											<span className="bg-[#E0EFF3] py-[7px] px-[8px]">
												{info.catchcopy}
											</span>
										)}
									</div>
									<p className="text-[16px] leading-[30px] mb-[17px] md:mb-[6px]">
										{info?.description}
									</p>
								</div>
							</div>
						);
						// }
					})}
				</DialogDescription>
			</DialogContent>
		</Dialog>
	);
};
