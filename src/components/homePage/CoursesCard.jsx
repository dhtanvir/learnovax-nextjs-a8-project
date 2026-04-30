import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const CoursesCard = ({ course }) => {
  const { title, instructor, rating, image, category } = course;

  return (
    <div>
      <Card className="border rounded-xl p-3 hover:shadow-xl transition">
        {/* Image */}
        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-0" />

          {/* Category */}
          <Chip
            size="sm"
            variant="flat"
            className="absolute right-3 top-3 z-10 bg-purple-600/90 text-white font-medium capitalize"
          >
            {category}
          </Chip>
        </div>

        {/* Content */}
        <div className="mt-3 space-y-1">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-sm text-gray-500">{instructor}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <FaStar className="text-yellow-500" />
          <p>{rating}</p>
        </div>

        {/* Button */}

        <Button variant="outline" className="w-full mt-3">
          View Details
        </Button>
      </Card>
    </div>
  );
};

export default CoursesCard;
