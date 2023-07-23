import * as React from "react";
import Style from "../../app/page.module.scss";
import Link from "next/link";
interface Data {
  [key:string] : string | number | string[];
}
interface ModalProps  {
  data: Data[];
  id: number;
}

export const Modal: React.FC<ModalProps> =({data,id}): JSX.Element => {
  const modalData = data[id]
  
	return (
		<div className={`${Style["modal-overlay"]}`}>
			{modalData && (
				<div className={`${Style["modal-content"]} ${Style["card"]}`}>
					<div className={`${Style.fx} ${Style["fx-sb"]} ${Style["fx-cv"]} ${Style["mb-4"]}`}>
						<div className={`${Style.fx} ${Style["modal-intro"]} ${Style["fx-cv"]} ${Style["fx-ch"]}`}>
							<Link href="/" className={`${Style["text-xl"]} ${Style["tc-white"]} ${Style["mr-3"]}`}>
								&lt;
							</Link>
							<h3 className={`${Style["heading-lg"]}`}>
								{modalData.name}
							</h3>
						</div>
						<p className={`${Style["text-lg"]}`}>{modalData["time_period"]}</p>
					</div>
					<h4 className={`${Style["heading"]} ${Style["mb-4"]}`}>
						{modalData.role}
					</h4>
					<ul className={`${Style["list-item"]}`}>
						{Array.isArray(modalData["description"])
							? modalData["description"].map((desc: string, index: number) => (
									<li
										key={index}
										className={`${Style["text-lg"]} ${Style["mb-2"]}`}
										dangerouslySetInnerHTML={{ __html: desc}} />
							  ))
							: null}
					</ul>
				</div>
			)}
		</div>
	);
}
