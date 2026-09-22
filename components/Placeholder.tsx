import type { Silhouette } from "@/lib/data";

const paths: Record<Silhouette, string> = {
  skyline:
    "M0 120V84h30V60h40v24h18V40l36-22 36 22v44h22V52h52v32h14V30h48v54h24V66h38v18h42v36z",
  house: "M0 120V96h60V62l70-38 70 38v34h40V70h90v26h70v24z",
  interior:
    "M0 120V104h40V80h110v24h40V70h14v34h66V86c0-8 8-14 18-14h40c10 0 18 6 18 14v18h54v16z",
};

type Props = {
  silhouette?: Silhouette;
  warm?: boolean;
  label?: string;
  alt: string;
  className?: string;
  shapeHeight?: string;
  children?: React.ReactNode;
};

/**
 * Zaślepka zdjęcia. Aby wstawić prawdziwe zdjęcie, zamień ten komponent na
 * <Image src="/zdjecia/..." alt="..." fill className="object-cover" /> z "next/image".
 */
export default function Placeholder({
  silhouette = "skyline",
  warm,
  label,
  alt,
  className = "",
  shapeHeight = "40%",
  children,
}: Props) {
  return (
    <div role="img" aria-label={alt} className={`ph ${warm ? "ph-warm" : ""} ${className}`}>
      <svg
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 w-full text-pine opacity-55"
        style={{ height: shapeHeight }}
      >
        <path fill="currentColor" d={paths[silhouette]} />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 border border-line bg-surface px-2 py-1 font-mono text-[0.68rem] tracking-wide text-muted">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
