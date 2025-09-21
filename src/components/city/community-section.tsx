"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MessageSquare, Users } from "lucide-react"

interface CommunitySectionProps {
  cityName: string
  memberCount?: number
}

export function CommunitySection({ cityName, memberCount = 2847 }: CommunitySectionProps) {
  const discussions = [
    { id: 1, author: "Ahmed K", message: "New halal Korean BBQ opened in Taksim! 🎉", time: "2h ago" },
    { id: 2, author: "Fatima A", message: "Looking for Arabic tutor for kids", time: "5h ago" },
    { id: 3, author: "Omar S", message: "Tech professionals meetup next week?", time: "1d ago" },
    { id: 4, author: "Sarah M", message: "Sisters' Quran circle every Saturday 3pm at Fatih", time: "2d ago" },
    { id: 5, author: "Ibrahim H", message: "Best place for morning run near Blue Mosque?", time: "3d ago" }
  ]

  const upcomingMeetups = [
    { id: 1, title: "Jummah @ Fatih Mosque", frequency: "Every Friday", time: "1:00 PM", attendees: 150 },
    { id: 2, title: "Sisters Quran Circle", frequency: "Saturday", time: "3:00 PM", attendees: 25 },
    { id: 3, title: "Iftar Gathering", frequency: "Sunday", time: "6:30 PM", attendees: 45 },
    { id: 4, title: "Tech Professionals Meetup", frequency: "Next Thursday", time: "7:00 PM", attendees: 30 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{cityName} Muslim Community</h2>
            <p className="text-gray-600">{memberCount.toLocaleString()} members • {Math.floor(memberCount * 0.15)} online</p>
          </div>
          <Button>Join Community</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-semibold">{memberCount.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Members</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-semibold">12</div>
            <div className="text-sm text-gray-600">Monthly Meetups</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <MessageSquare className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-semibold">89</div>
            <div className="text-sm text-gray-600">Active Discussions</div>
          </div>
        </div>
      </Card>

      {/* Upcoming Meetups */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-green-600" />
          Upcoming Meetups
        </h3>
        <div className="space-y-3">
          {upcomingMeetups.map(meetup => (
            <div key={meetup.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div>
                <h4 className="font-medium">{meetup.title}</h4>
                <p className="text-sm text-gray-600">{meetup.frequency} • {meetup.time}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{meetup.attendees} attending</p>
                <Button size="sm" variant="outline" className="mt-1">Join</Button>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4" variant="outline">Create Meetup</Button>
      </Card>

      {/* Recent Discussions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-green-600" />
          Recent Discussions
        </h3>
        <div className="space-y-4">
          {discussions.map(discussion => (
            <div key={discussion.id} className="border-b pb-3 last:border-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{discussion.author}</span>
                    <span className="text-xs text-gray-500">{discussion.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{discussion.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4" variant="outline">Start Discussion</Button>
      </Card>

      {/* Community Members Grid */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Active Members</h3>
        <div className="grid grid-cols-8 gap-2 mb-4">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="relative group">
              <div className="w-12 h-12 bg-gray-300 rounded-full cursor-pointer hover:ring-2 hover:ring-green-500" />
              {i < 5 && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center">
          Join to see all {memberCount.toLocaleString()} members
        </p>
      </Card>
    </div>
  )
}